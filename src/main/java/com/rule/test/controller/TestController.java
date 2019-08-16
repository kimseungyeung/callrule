package com.rule.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

@Controller
public class TestController {
    Connection conn;
    Statement state;
    @RequestMapping(value = "/index")
    public String index(Model m) {
       m.addAttribute("name","방가방가");

        return "index";
    }
    //db가져오기
    @RequestMapping(path = "/test" , method = RequestMethod.POST)
    @ResponseBody
    public String test(@RequestParam String k) {
        String dd="";
       try{
           String jdbcurl ="jdbc:mysql://10.167.107.125:3306/test?useUnicode=true&serverTimezone=UTC";
           String username="root";
           String pasword="tmddud";

           conn= DriverManager.getConnection(jdbcurl,username,pasword);
           state=conn.createStatement();
           state.close();
           conn.close();
           dd="연결성공";
       }catch (Exception e){
            dd=e.getMessage().toString();
       }

        return dd;
    }
    @RequestMapping(path = "/test2" , method = RequestMethod.POST)
    @ResponseBody
    public String test2(@RequestParam String k) {
        String dd=k+"입니다.";


        return dd;
    }
}
