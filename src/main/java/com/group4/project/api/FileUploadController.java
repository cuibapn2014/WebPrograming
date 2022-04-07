package com.group4.project.api;

import com.group4.project.models.ResponseObject;
import com.group4.project.services.IStoreServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping(path = "/api/v1/upload-image")
public class FileUploadController {

    @Autowired
    private IStoreServices iStoreServices;

    @PostMapping("")
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
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        Resource file = iStoreServices.loadImage(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }
}
