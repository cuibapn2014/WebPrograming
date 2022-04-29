package com.group4.project.helper;

import java.text.Normalizer;
import java.text.Normalizer.Form;
import java.util.Locale;
import java.util.regex.Pattern;

public class Slug {
    private static final Pattern NONLATIN = Pattern.compile("[^\\w_-]");  
    private static final Pattern SEPARATORS = Pattern.compile("[\\s\\p{Punct}&&[^-]]");  

    public static String toSlug(String input) {
        if(!input.equals(null)) {
            String noseparators = SEPARATORS.matcher(removeAccent(input)).replaceAll("-");
            String normalized = Normalizer.normalize(noseparators, Form.NFD);
            String slug = NONLATIN.matcher(normalized).replaceAll("");
            return slug.toLowerCase(Locale.ENGLISH).replaceAll("-{2,}", "-").replaceAll("^-|-$", "");
        }
        return null;
    }
    
    public static String removeAccent(String s) {
        String temp = Normalizer.normalize(s, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        return pattern.matcher(temp).replaceAll("");
    }
}
