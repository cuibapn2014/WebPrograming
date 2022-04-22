package com.group4.project.services;

import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.util.stream.Stream;

public interface IStoreServices {
    public String storeImage(MultipartFile image);
    public Stream<Path> loadAll();
    public byte[] readFileContent(String fileName);
    public void deleteAllImage();
    public void deleteImage(String fileName);
    public Resource loadImage(String fileName);
}
