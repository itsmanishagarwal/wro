package net.manish.sample.controllers;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author Manish
 */

@Controller
public class HomeController {

  Logger logger =  Logger.getLogger(this.getClass());
  
  @RequestMapping(value = {
      "/home", ""
  })
  public String displayIndex(HttpServletRequest request, HttpServletResponse response, ModelMap map) {
    logger.debug("Entering controller");
//    map.addAttribute("name", "Manish");
//    ModelAndView mnv = new ModelAndView("/WEB-INF/tiles/jsp/index.jsp", map);
//    Cookie cookie = new Cookie("CPBM", "command=login");
//    response.addCookie(cookie);
    logger.debug("Exiting controller");
    return "test";
  }

  @RequestMapping("/submitName")
  public ModelAndView submitName(HttpServletRequest request, HttpServletResponse response) {
    System.out.println("Entering submitName");
    Map<String, String> model = new HashMap<String, String>();
    String name = request.getParameter("name");
    System.out.println("NAme is :" + name);
    ModelAndView mnv = new ModelAndView("/WEB-INF/jsp/index.jsp", model);
    mnv.addObject("name", name);
    System.out.println("Exiting submitName");
    return mnv;
  }

  @ResponseBody
  @RequestMapping("/appName")
  public String returnAppName(HttpServletRequest request, HttpServletResponse response) {
    System.out.println("Entering returnAppName");
    System.out.println("Method:" + request.getMethod());
    System.out.println("Exiting returnAppName");
    return "wro";
  }

  @RequestMapping("/appNameNew")
  @ResponseBody
  public String returnAppNameNew(HttpServletRequest request, HttpServletResponse response) {
    System.out.println("Entering returnAppName");
    System.out.println("Method:" + request.getMethod());
    String callback = request.getParameter("jsoncallback");
    StringBuffer buf = new StringBuffer();
    buf.append(callback + "({'manish' : 'agarwal'});");
    return buf.toString();
  }
}
