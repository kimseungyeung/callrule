package com.rule.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SubPageController {

    @RequestMapping(path = "/sub")
    public String sub(Model m){
        m.addAttribute("text","서브메인화면입니다.");
        return "sub";
    }

    @PostMapping(path ="/sub2" )

    public String sub2(Model m,@RequestParam String k,@RequestParam String j){
        m.addAttribute("text",k);
        m.addAttribute("text",j);
        return "sub2";
    }
    @RequestMapping(path ="/sub3" )

    public String sub3(Model m){
        m.addAttribute("value","안녕하슈");
        return "sub3";
    }
}
