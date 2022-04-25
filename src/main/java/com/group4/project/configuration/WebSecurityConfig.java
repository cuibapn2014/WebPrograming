package com.group4.project.configuration;

import com.group4.project.filter.CustomAuthenticationFilter;
import com.group4.project.filter.CustomAuthorizationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.security.config.http.SessionCreationPolicy.*;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    private final UserDetailsService userDetailsService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter(authenticationManagerBean());
        customAuthenticationFilter.setFilterProcessesUrl("/api/v1/auth");
        http.csrf().disable();
        http.authorizeRequests().antMatchers("/api/v1/auth/**").permitAll();
        http.authorizeRequests().antMatchers("/api/v1/user/signup").permitAll();
        http.authorizeRequests().antMatchers("/api/v1/image/**").permitAll();
        http.sessionManagement().sessionCreationPolicy(STATELESS);
        http.authorizeRequests().antMatchers(GET, "/api/user/**").hasAnyAuthority("USER", "ADMIN");
        http.authorizeRequests().antMatchers(DELETE, "/api/user/**").hasAnyAuthority("USER", "ADMIN");
        http.authorizeRequests().antMatchers(GET, "/send-mail/**").hasAnyAuthority("USER", "ADMIN");
//        http.authorizeRequests().antMatchers(GET, "/api/user/**").hasAnyAuthority("ADMIN");
        http.cors().and().authorizeRequests().antMatchers("/api/v1/**").authenticated();
        http.cors().and().authorizeRequests().antMatchers("/send-mail/**").authenticated();
        http.addFilter(customAuthenticationFilter);
        http.addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
