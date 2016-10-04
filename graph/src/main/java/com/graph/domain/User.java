/**
 * 
 */
package com.graph.domain;

import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;

/**
 * @author euro
 *
 */
@NodeEntity
public class User {
	
	 @GraphId Long id;
	 
	 

}
