package com.group4.project;

import com.group4.project.models.UserRole;
import com.group4.project.repositories.UserRoleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@Configuration
@EnableWebMvc
@Slf4j
public class Application implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/**")
				.addResourceLocations("classpath:/static/")
				.setCachePeriod(3600)
				.resourceChain(true);
	}
	
	@Bean
	public PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}

	@Bean
	public CommandLineRunner initData(UserRoleRepository roleRepository){
		return args -> {
			UserRole admin = new UserRole("ADMIN");
			UserRole user = new UserRole("USER");
			if(roleRepository.findAll().isEmpty()){
				roleRepository.save(admin);
				roleRepository.save(user);
			}else{
				log.info("Role table is exist!");
			}
		};
	}
}
