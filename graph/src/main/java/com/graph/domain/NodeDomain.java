/**
 * 
 */
package com.graph.domain;

import java.util.Map;

/**
 * @author euro
 *
 */
public class NodeDomain implements Node {

	private String name;

	private Map<String, Object> properties;

	@Override
	public String getName() {
		return this.name;
	}

	@Override
	public Map<String, Object> getProperties() {
		return this.properties;
	}

}
