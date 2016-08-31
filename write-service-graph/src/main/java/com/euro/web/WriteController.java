/**
 * 
 */
package com.euro.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author euro
 *
 */
@RestController
public class WriteController {

	@RequestMapping(value="/createNode",method=RequestMethod.GET)
	public @ResponseBody String createNode(){
		return "ALL Nodes";
	}
	
}
