package com.kyle.identity.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.vendor.HibernateJpaSessionFactoryBean;

import javax.persistence.EntityManagerFactory;

@Configuration
public class DatabaseConfig {

    @Bean
    public HibernateJpaSessionFactoryBean sessionFactory(EntityManagerFactory entityManagerFactory) {
        HibernateJpaSessionFactoryBean sessionFactoryBean = new HibernateJpaSessionFactoryBean();
        sessionFactoryBean.setEntityManagerFactory(entityManagerFactory);
        return sessionFactoryBean;
    }

}
