package com.rule.test.controller;

import com.rule.test.data.CustomerData;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CallController {
    @RequestMapping(path = "/rule" , method = RequestMethod.GET)
    public String callrule(CustomerData cdata){
        return "dfg";
    }
}
