package com.rule.test.controller;

import com.rule.test.data.CustomerData;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CallController {
    String mainserver="http://hidayz.com/api/rule/execute/82974e09-27e8-4437-bbfd-6cf178f44820/tester";
    @RequestMapping(path = "/rule" , method = RequestMethod.GET)
    public String callrule(CustomerData cdata){
        return "dfg";
    }
}
