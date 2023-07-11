package com.example.springboot.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Service;

import com.example.springboot.dbutil.DBUtil;
import com.example.springboot.service.UserService;

@Service
public class UserServiceImpl implements UserService{
    
	int flag =0;
	Connection connection;
	
	public UserServiceImpl() throws SQLException {
		
		connection = DBUtil.getConnection();
	}
	
	
	@Override
	public int loginValidation(String username, String password) {
		
		
		try {
			PreparedStatement statement = connection.prepareStatement("SELECT * FROM user WHERE username = '"+username+"'");
			   ResultSet rs = statement.executeQuery();
			   while(rs.next()) {
			    	
			    	if(rs.getString(6).equals(username) && rs.getString(4).equals(password)) {
			    		flag = 1;
			    		}else {
				    	System.out.println("Invalid Username or Password");
				    	flag = 0;
			    	}
		
			   }
		}catch (SQLException e) {
			
			e.printStackTrace();
		}

		return flag;
	}
}