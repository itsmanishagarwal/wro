package net.manish.sample.controllers;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author Manish
 */

@Controller
public class HomeController {

  Logger logger =  Logger.getLogger(this.getClass());
  
  @ModelAttribute(value="appName")
  public String servletContext(HttpServletRequest request){
    return "wro";
  }
  
  @RequestMapping(value = {
      "/home", ""
  })
  public String displayIndex(HttpServletRequest request, HttpServletResponse response, ModelMap map) {
    logger.debug("Entering controller");
    map.addAttribute("name", "Manish");
    Cookie cookie = new Cookie("CPBM", "command=login");
    response.addCookie(cookie);
    logger.debug("Exiting controller");
    return "index";
  }

  @RequestMapping("/submitName")
  public String submitName(HttpServletRequest request, HttpServletResponse response,  ModelMap map) {
    logger.debug("Entering submitName");
    String name = request.getParameter("name");
    logger.debug("Name is :" + name);
    map.addAttribute("name", name);
    logger.debug("Exiting submitName");
    return "index";
  }

  @ResponseBody
  @RequestMapping("/appName")
  public String returnAppName(HttpServletRequest request, HttpServletResponse response) {
    logger.debug("Entering returnAppName");
    logger.debug("Method:" + request.getMethod());
    logger.debug("Exiting returnAppName");
    return "wro";
  }

  @RequestMapping("/appNameNew")
  @ResponseBody
  public String returnAppNameNew(HttpServletRequest request, HttpServletResponse response) {
    logger.debug("Entering returnAppName");
    logger.debug("Method:" + request.getMethod());
    String callback = request.getParameter("jsoncallback");
    StringBuffer buf = new StringBuffer();
    buf.append(callback + "({'manish' : 'agarwal'});");
    return buf.toString();
  }
}
