const questions = [

/* =========================
MCQ - SPRING CORE (IoC, DI)
========================= */

{
type:"mcq",
question:"What is IoC in Spring?",
options:[
"Inversion of Control",
"Injection of Code",
"Input of Control",
"None"
],
answer:"Inversion of Control",
hint:"Container manages objects"
},

{
type:"mcq",
question:"What does IoC container do?",
options:[
"Manages object lifecycle",
"Executes SQL queries",
"Handles UI",
"Compiles code"
],
answer:"Manages object lifecycle",
hint:"Creates & manages beans"
},

{
type:"mcq",
question:"What is Dependency Injection?",
options:[
"Injecting dependencies automatically",
"Creating objects manually",
"Deleting objects",
"None"
],
answer:"Injecting dependencies automatically",
hint:"Loose coupling"
},

{
type:"mcq",
question:"Which annotation is used for DI?",
options:["@Autowired","@Bean","@Component","@Value"],
answer:"@Autowired",
hint:"Inject dependency"
},

{
type:"mcq",
question:"Which annotation defines a Spring bean?",
options:["@Component","@Override","@Entity","@Table"],
answer:"@Component",
hint:"Generic bean"
},

{
type:"mcq",
question:"Which annotation is used for configuration class?",
options:["@Configuration","@Component","@Bean","@Service"],
answer:"@Configuration",
hint:"Config class"
},

{
type:"mcq",
question:"Which annotation defines a bean method?",
options:["@Bean","@Autowired","@Service","@Repository"],
answer:"@Bean",
hint:"Inside config class"
},

/* =========================
MCQ - SPRING BOOT BASICS
========================= */

{
type:"mcq",
question:"Spring Initializr is used for?",
options:[
"Project creation",
"Database creation",
"UI design",
"Testing"
],
answer:"Project creation",
hint:"Generate starter project"
},

{
type:"mcq",
question:"Which file contains app configuration?",
options:["application.properties","pom.xml","config.java","main.java"],
answer:"application.properties",
hint:"Key-value pairs"
},

{
type:"mcq",
question:"Which dependency manager is used in Spring Boot?",
options:["Maven","Gradle","Both","None"],
answer:"Both",
hint:"Build tools"
},

/* =========================
MCQ - LAYERED ARCHITECTURE
========================= */

{
type:"mcq",
question:"Which layer handles HTTP requests?",
options:["Controller","Service","Repository","Entity"],
answer:"Controller",
hint:"API layer"
},

{
type:"mcq",
question:"Which layer contains business logic?",
options:["Service","Controller","Repository","Entity"],
answer:"Service",
hint:"Core logic"
},

{
type:"mcq",
question:"Which layer interacts with database?",
options:["Repository","Service","Controller","DTO"],
answer:"Repository",
hint:"Data layer"
},

{
type:"mcq",
question:"Which annotation marks Controller?",
options:["@RestController","@Service","@Repository","@Component"],
answer:"@RestController",
hint:"REST API"
},

{
type:"mcq",
question:"Which annotation marks Service layer?",
options:["@Service","@Controller","@Repository","@Component"],
answer:"@Service",
hint:"Business logic"
},

{
type:"mcq",
question:"Which annotation marks Repository layer?",
options:["@Repository","@Service","@Controller","@Component"],
answer:"@Repository",
hint:"DB access"
},

/* =========================
MCQ - CRUD APIs
========================= */

{
type:"mcq",
question:"Which HTTP method is used to create data?",
options:["POST","GET","PUT","DELETE"],
answer:"POST",
hint:"Create"
},

{
type:"mcq",
question:"Which HTTP method retrieves data?",
options:["GET","POST","PUT","DELETE"],
answer:"GET",
hint:"Read"
},

{
type:"mcq",
question:"Which HTTP method updates data?",
options:["PUT","POST","GET","DELETE"],
answer:"PUT",
hint:"Update"
},

{
type:"mcq",
question:"Which HTTP method deletes data?",
options:["DELETE","PUT","GET","POST"],
answer:"DELETE",
hint:"Delete"
},

/* =========================
MCQ - EXCEPTION & VALIDATION
========================= */

{
type:"mcq",
question:"Which annotation handles exceptions globally?",
options:["@ControllerAdvice","@ExceptionHandler","@Service","@Component"],
answer:"@ControllerAdvice",
hint:"Global error handling"
},

{
type:"mcq",
question:"Which annotation handles specific exception?",
options:["@ExceptionHandler","@ControllerAdvice","@Autowired","@Bean"],
answer:"@ExceptionHandler",
hint:"Method-level"
},

{
type:"mcq",
question:"Which annotation validates request body?",
options:["@Valid","@RequestBody","@Autowired","@Entity"],
answer:"@Valid",
hint:"Validation trigger"
},

{
type:"mcq",
question:"Which annotation ensures field is not empty?",
options:["@NotNull","@Entity","@Table","@Id"],
answer:"@NotNull",
hint:"Validation constraint"
},

/* =========================
MCQ - SPRING DATA JPA
========================= */

{
type:"mcq",
question:"What does @Entity represent?",
options:[
"Database table",
"API endpoint",
"Service class",
"Controller"
],
answer:"Database table",
hint:"Maps class to table"
},

{
type:"mcq",
question:"Which annotation defines primary key?",
options:["@Id","@Column","@Entity","@Table"],
answer:"@Id",
hint:"Primary key"
},

{
type:"mcq",
question:"Which interface is used for JPA repository?",
options:[
"JpaRepository",
"CrudRepository",
"Both",
"None"
],
answer:"Both",
hint:"DB operations"
},

/* =========================
CODING - SPRING CORE
========================= */

{
type:"code",
question:"Create bean using @Component",

required:["component"],

hint:"Bean creation",

solution:`import org.springframework.stereotype.Component;

@Component
public class Demo {
  public void show(){
    System.out.println("Bean created");
  }
}`
},

{
type:"code",
question:"Dependency Injection using @Autowired",

required:["autowired"],

hint:"Inject object",

solution:`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyService {

  @Autowired
  Demo demo;

  public void test(){
    demo.show();
  }
}`
},

/* =========================
CODING - SPRING BOOT API
========================= */

{
type:"code",
question:"Create REST Controller",

required:["restcontroller"],

hint:"API layer",

solution:`import org.springframework.web.bind.annotation.*;

@RestController
public class DemoController {

  @GetMapping("/hello")
  public String hello(){
    return "Hello Spring Boot";
  }
}`
},

{
type:"code",
question:"POST API",

required:["postmapping"],

hint:"Create",

solution:`@PostMapping("/add")
public String add(){
  return "Data Added";
}`
},

{
type:"code",
question:"PUT API",

required:["putmapping"],

hint:"Update",

solution:`@PutMapping("/update")
public String update(){
  return "Updated";
}`
},

{
type:"code",
question:"DELETE API",

required:["deletemapping"],

hint:"Delete",

solution:`@DeleteMapping("/delete")
public String delete(){
  return "Deleted";
}`
},

/* =========================
CODING - VALIDATION
========================= */

{
type:"code",
question:"Validation using @Valid",

required:["valid"],

hint:"Request validation",

solution:`import jakarta.validation.constraints.NotNull;

public class Student {

  @NotNull
  private String name;
}`
},

/* =========================
CODING - EXCEPTION
========================= */

{
type:"code",
question:"Global Exception Handler",

required:["controlleradvice"],

hint:"Handle errors",

solution:`import org.springframework.web.bind.annotation.*;

@ControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(Exception.class)
  public String handle(){
    return "Error occurred";
  }
}`
},

/* =========================
CODING - JPA ENTITY
========================= */

{
type:"code",
question:"Create Entity class",

required:["entity","id"],

hint:"Table mapping",

solution:`import jakarta.persistence.*;

@Entity
public class Student {

  @Id
  private int id;

  private String name;
}`
},

{
type:"code",
question:"Create Repository interface",

required:["jparepository"],

hint:"DB operations",

solution:`import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository 
  extends JpaRepository<Student, Integer> {
}`
}

];