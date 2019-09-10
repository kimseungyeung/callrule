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
    @RequestMapping(path = "/test" , method = RequestMethod.GET)
    @ResponseBody
    public String test(@RequestParam String k) {
        String dd="";
       try{
           String jdbcurl ="jdbc:mysql://hidayz.com:3306/hk_rcube?useUnicode=true&serverTimezone=UTC";
           String username="root";
           String pasword="hidayz1004";

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
    public String test2(String phonnum) {
        String dd="";
        if(phonnum.equals("010-8907-1519")) {
             dd = "김승영" + "입니다.";
        }else if(phonnum.equals("010-9930-1510")){
            dd = "안성수" + "입니다.";
        }else if(phonnum.equals("010-9525-9533")){
            dd = "전성하" + "입니다.";
        }else{
            dd="등록되지 않은 사람입니다.";
        }



        return dd;
    }


}
