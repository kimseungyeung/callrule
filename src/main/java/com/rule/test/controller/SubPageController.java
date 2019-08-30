package com.rule.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SubPageController {

    @RequestMapping(path = "/sub")
    public String sub(Model m){
        m.addAttribute("text","서브메인화면입니다.");
        return "sub";
    }

    @RequestMapping(path ="/sub2")
    public String sub2(Model m){
        m.addAttribute("text","서브메인2화면입니다.");
        return "sub2";
    }
}
