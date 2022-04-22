package com.group4.project.services;

import org.apache.commons.io.FilenameUtils;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.*;
import java.util.Arrays;
import java.util.UUID;
import java.util.stream.Stream;

@Service
public class ImageStoreService implements IStoreServices{
    private final Path storageFolder = Paths.get(   "src/main/resources/static/images");

    public ImageStoreService() {
        try{
            Files.createDirectories(storageFolder);
        }catch(IOException e){
            throw new RuntimeException("Error");
        }
    }
    private boolean isImageFile(MultipartFile file){
        String fileExtension = FilenameUtils.getExtension(file.getOriginalFilename());
        return Arrays.asList(new String[] {"png", "jpg", "jpeg", "bmp"})
                .contains(fileExtension.trim().toLowerCase());
    }
    @Override
    public String storeImage(MultipartFile image) {
        try{
            if(image.isEmpty()){
                throw new RuntimeException("Failed to upload image");
            }
            if(!isImageFile(image)){
                throw  new RuntimeException("You can only upload image file");
            }
            float fileSizeImage = image.getSize() / 1000000;
            if(fileSizeImage > 5.0f){
                throw new RuntimeException("File must be <= 5Mb");
            }
            String fileExtension = FilenameUtils.getExtension(image.getOriginalFilename());
            String generateFileName = UUID.randomUUID().toString().replace("-","");
            generateFileName = generateFileName + "." + fileExtension;
            Path destinationFilePath = this.storageFolder.resolve(
                    Paths.get(generateFileName))
                    .normalize().toAbsolutePath();
            if(!destinationFilePath.getParent().equals(this.storageFolder.toAbsolutePath())){
                throw new RuntimeException("Cannot store file outside current directory");
            }

            try(InputStream inputStream = image.getInputStream()){
                Files.copy(inputStream, destinationFilePath, StandardCopyOption.REPLACE_EXISTING);
            }

            return generateFileName;
        }catch (Exception e){
            throw new RuntimeException("Failed to upload image", e);
        }
    }

    @Override
    public Stream<Path> loadAll() {
        return null;
    }

    @Override
    public byte[] readFileContent(String fileName) {
        return new byte[0];
    }

    @Override
    public void deleteAllImage() {

    }

    @Override
    public void deleteImage(String fileName) {
        Path imgPath = this.storageFolder.resolve(
                        Paths.get(fileName))
                .normalize().toAbsolutePath();
        try {
            Files.delete(imgPath);
            throw new RuntimeException("File or directory deleted successfully");
        } catch (NoSuchFileException ex) {
            throw new RuntimeException("No such file or directory:" + imgPath);
        } catch (DirectoryNotEmptyException ex) {
            throw new RuntimeException("Directory %s is not empty:" + imgPath);
        } catch (IOException ex) {
            throw new RuntimeException(ex.getMessage());
        }
    }

    @Override
    public Resource loadImage(String fileName) {
        try {
            Path file = storageFolder.resolve(fileName);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }
}
