package net.manish.sample.controllers;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author Manish
 * 
 */

@Controller
public class HomeController {

  
	
  @RequestMapping(value = {"/home",""})
  public ModelAndView displayIndex() {
    System.out.println("Entering controller");
    Map<String, String> model = new HashMap<String, String>();
    ModelAndView mnv = new ModelAndView("/WEB-INF/jsp/index.jsp", model);
    System.out.println("Exiting controller");
    return mnv;
  }
  
  @RequestMapping("/submitName")
  public ModelAndView submitName(HttpServletRequest request,HttpServletResponse response){
	  System.out.println("Entering submitName");
	  Map<String, String> model = new HashMap<String, String>();
	  String name = request.getParameter("name");
	  System.out.println("NAme is :"+name);
	  ModelAndView mnv = new ModelAndView("/WEB-INF/jsp/index.jsp", model);
	  mnv.addObject("name", name);
	  System.out.println("Exiting submitName");
	    return mnv;
  }
  
  @ResponseBody
  @RequestMapping("/appName")
  public String returnAppName(HttpServletRequest request,HttpServletResponse response){
	  System.out.println("Entering returnAppName");
	  System.out.println("Exiting returnAppName");
    return "wro";
  }
}
