package tn.esprit.spring.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class subCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subCategoryID;
    private String subCategoryTitle;
    private String subCategoryDescription;

    @ManyToOne
    private category category;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="subcategory")
    private Set<accommodation> accommodations;
}