package com.group4.project.api;

import com.group4.project.models.Image;
import com.group4.project.models.ResponseCode;
import com.group4.project.models.ResponseObject;
import com.group4.project.repositories.ImageRepository;
import com.group4.project.services.image.IStoreServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/v1/image")
public class FileUploadController {

    @Autowired
    private IStoreServices iStoreServices;

    @Autowired
    private ImageRepository imageRepository;

    @PostMapping("/upload")
    public ResponseEntity<ResponseObject> uploadImage(@RequestParam("image")MultipartFile[] images){
        try {
            List<String> fileNames = new ArrayList<>();
            Arrays.asList(images).stream().forEach(multipartFile -> {
                fileNames.add(iStoreServices.storeImage(multipartFile));
            });
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Upload successfully", 200, fileNames)
            );
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(
                    new ResponseObject(e.getMessage(), 417, null)
            );
        }
    }

    @GetMapping("/files/{filename:.+}")
    public ResponseEntity<byte[]> getFile(@PathVariable String filename) {
        try{
            byte[] bytes = iStoreServices.readFileContent(filename);
            return ResponseEntity
                    .ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(bytes);
        }catch(Exception e){
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteImg(@PathVariable Integer id){
        Optional<Image> img = imageRepository.findById(id);
        iStoreServices.deleteImage(img.get().getUrlImage());
        imageRepository.deleteById(id);
        return ResponseEntity.ok().body(
                new ResponseObject("delete successfully", ResponseCode.HTTP_OK, null)
        );
    }
}
