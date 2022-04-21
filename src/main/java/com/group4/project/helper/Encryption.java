package com.group4.project.helper;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.group4.project.models.User;

public class Encryption {
    public static String generateToken(User user) {
        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
        String generateToken = JWT.create()
                .withSubject(user.getUsername())
                .withClaim("role", user.getRole().getName())
                .withClaim("name", user.getUserProfile().getLastName() + " " + user.getUserProfile().getFirstName())
                .sign(algorithm);
        return generateToken;
    }

    public DecodedJWT decodeJWTToken(String token){
        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        return verifier.verify(token);
    }
}
