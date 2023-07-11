package com.example.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class Admin {

@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
@Column(name="id")
	private int id;
@Column(name="username")
	private String username;
@Column(name="mail", unique = true)
	private String mail;
@Column(name="role")
private String role;
@Column(name="mobile")
private String mobile;
@Column(name="password")
private String password;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getMail() {
	return mail;
}
public void setMail(String mail) {
	this.mail = mail;
}
public String getRole() {
	return role;
}
public void setRole(String role) {
	this.role = role;
}
public String getMobile() {
	return mobile;
}
public void setMobile(String mobile) {
	this.mobile = mobile;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public Admin(int id, String username, String mail, String role, String mobile, String password) {
	super();
	this.id = id;
	this.username = username;
	this.mail = mail;
	this.role = role;
	this.mobile = mobile;
	this.password = password;
}
public Admin() {
	super();
	// TODO Auto-generated constructor stub
}


}