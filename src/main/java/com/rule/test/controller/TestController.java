package com.rule.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class TestController {

    @RequestMapping(value = "/index")
    public String index(Model m) {
       m.addAttribute("name","방가방가");

        return "index";
    }



}
