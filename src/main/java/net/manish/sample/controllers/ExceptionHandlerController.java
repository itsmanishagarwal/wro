package net.manish.sample.controllers;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * 
 * @author manish
 *
 */

@Controller
public class ExceptionHandlerController {

  Logger logger = Logger.getLogger(getClass());
  
  @ExceptionHandler(Exception.class)
  public void handleException(Exception ex){
    logger.debug("Handling exception:"+ex.getMessage(),ex);
  }
}
