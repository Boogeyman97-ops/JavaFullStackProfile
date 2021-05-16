package com.example.demo.controller;


import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin()
public class UserController {
    
    @Autowired
    UserRepository userRepo;

    @PostMapping(path="/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public HttpStatus addData(@RequestBody User user){
        User user1 = new User();
        user1.setEmail(user.getEmail());
        user1.setMobile(user.getMobile());
        user1.setPassword(user.getPassword());
        userRepo.save(user);
        return HttpStatus.OK;
        
    }

    @PostMapping(path="/authenticate", consumes = MediaType.APPLICATION_JSON_VALUE)
    public HttpStatus authenticate(@RequestBody String user){
        Boolean value = userRepo.findById(user).isPresent();
        if(value){
            return HttpStatus.OK;
        }
        else{
            return HttpStatus.UNAUTHORIZED;
        }
        
        
    }

    
}
