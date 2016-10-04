package com.graph.framework.template;

import java.util.Set;

import com.graph.domain.Node;

public interface GraphOperations {

	boolean createNode(Node node);
	
	Set<String> listAllNodes();

}
