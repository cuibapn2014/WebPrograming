package com.group4.project.helper;

import java.util.Base64;

public class Encryption {
    public static String generateToken(String input) {
        String encodedString = Base64.getEncoder().encodeToString(input.getBytes());
        return encodedString;
    }
}
