package tn.esprit.amal.Enteties;

import jakarta.persistence.*;
import lombok.experimental.FieldDefaults;
import lombok.*;

@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Universite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idUniversite;

    String nomUniversite;
    String adresse;

    @OneToOne
    Foyer foyer;
}
