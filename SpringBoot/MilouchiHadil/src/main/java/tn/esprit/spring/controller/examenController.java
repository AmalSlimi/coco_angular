package tn.esprit.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.spring.entity.Author;

import tn.esprit.spring.entity.Book;
import tn.esprit.spring.entity.Status;
import tn.esprit.spring.entity.Student;
import tn.esprit.spring.service.ServiceTest;

import java.util.List;

@RestController
public class TestController {
    @Autowired
    private ServiceTest serviceTest;
    @PostMapping("/addAuthor")
    public Author addAuthor(@RequestBody Author author){

        return serviceTest.addAuthor(author);
    }
    @PostMapping("/addStudent")
    public Student addStudent(@RequestBody Student student){

        return serviceTest.addStudent(student);
    }
    @PostMapping("/addBookAndAssignToAuthor/{autherID}")
    public Book addBookAndAssignToAuthor(@RequestBody Book book, @PathVariable Long autherID){
        return serviceTest.addBookAndAssignToAuthor(book,autherID);
    }

    @PostMapping("/assignStudentToBook/{studentId}/{isbn}")
    public Student assignStudentToBook(@PathVariable Long studentId, @PathVariable Long isbn) {
        return serviceTest.assignStudentToBook(studentId, isbn);
    }

    @GetMapping("/retrieveStudentsByStatus/{status}")
    public List<Student> retrieveStudentsByStatus(@PathVariable("status") Status status) {
        return serviceTest.retrieveStudentsByStatus(status);
    }


}
