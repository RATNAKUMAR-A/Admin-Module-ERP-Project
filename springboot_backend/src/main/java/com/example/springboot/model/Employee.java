package com.example.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employees")
public class Employee {

@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
@Column(name="fname")
	private String fname;
@Column(name="lname")
	private String lname;
@Column(name="mail", unique = true)
	private String mail;
@Column(name="role")
private String role;
@Column(name="mobile")
private String mobile;
@Column(name="dob")
private String dob;
@Column(name="address")
private String address;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public Employee(int id, String fname, String lname, String mail, String role, String mobile, String dob,
			String address) {
		super();
		this.id = id;
		this.fname = fname;
		this.lname = lname;
		this.mail = mail;
		this.role = role;
		this.mobile = mobile;
		this.dob = dob;
		this.address = address;
	}
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
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
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	
	
}
