package com.example.springboot.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.exception.ResourceNotFoundException;
import com.example.springboot.model.Admin;
import com.example.springboot.model.CountClass;
import com.example.springboot.model.Employee;
import com.example.springboot.repository.AdminRepository;
import com.example.springboot.repository.EmployeeRepository;
import com.example.springboot.service.UserService;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private AdminRepository adminRepository;
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
		Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not Exist with id:"+id));
	return ResponseEntity.ok(employee);
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employeeDetails){
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		employee.setFname(employeeDetails.getFname());
		employee.setLname(employeeDetails.getLname());
		employee.setMail(employeeDetails.getMail());
		employee.setDob(employeeDetails.getDob());
		employee.setRole(employeeDetails.getRole());
		employee.setMobile(employeeDetails.getMobile());
		employee.setAddress(employeeDetails.getAddress());
		
		
		Employee updatedEmployee = employeeRepository.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int id){
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	@DeleteMapping("employees/admin/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAdmin(@PathVariable int id){
		Admin admin = adminRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Admin not exist with id :" + id));
		
		adminRepository.delete(admin);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	@GetMapping("/employees/count")
	public CountClass getCountEmployees(){
		long v=employeeRepository.count();
		CountClass countclass=new CountClass(v);
		return countclass;
	}
	@DeleteMapping("/employees/deleteall")
	public String delAll() {
		employeeRepository.deleteAll();
		return "Deleted";
	}
	@Autowired
	private UserService userservice;
	
	@GetMapping("employees/{username}/{password}")
	 public int UserLogin (@PathVariable("username") String usernamel, @PathVariable("password") String password1){
	

		if(userservice.loginValidation (usernamel, password1) == 0) {
//s.setM(flag);
		return 0;

		}else {
   // s.setM(1);
		return 1; 
	

	}
	

	}
	
	@GetMapping("/employees/admins")
	public List<Admin> getAllAdmins(){
		return adminRepository.findAll();
	}
	@PostMapping("/employees/admin")
	public Admin createAdmin(@RequestBody Admin admin) {
		return adminRepository.save(admin);
	}
	@PutMapping("/employees/admin/{id}")
	public ResponseEntity<Admin> updateAdmin(@PathVariable int id, @RequestBody Admin adminDetails){
		Admin admin = adminRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Admin not exist with id :" + id));
		
		admin.setPassword(adminDetails.getPassword());
		
		
		Admin updatedAdmin = adminRepository.save(admin);
		return ResponseEntity.ok(updatedAdmin);
	}
	
	@GetMapping("/employees/admin/{id}")
	public ResponseEntity<Admin> getAdminById(@PathVariable int id) {
		Admin admin = adminRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Admin not Exist with id:"+id));
	return ResponseEntity.ok(admin);
	}
}
