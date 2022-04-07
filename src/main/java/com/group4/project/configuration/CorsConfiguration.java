package com.group4.project.configuration;

import com.group4.project.database.Database;
import com.group4.project.repositories.product.ProductRepository;
import com.group4.project.repositories.user.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfiguration implements WebMvcConfigurer {
    private static final Logger logger = LoggerFactory.getLogger(Database.class);

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }

    @Bean
    CommandLineRunner checkCors(){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                logger.info("Ran...");
            }
        };
    }
}
