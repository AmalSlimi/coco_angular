package tn.esprit.amal.Enteties;
import jakarta.persistence.*;
import lombok.experimental.FieldDefaults;
import lombok.*;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reservation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    String reservationId;

    Date anneUniversitaire;
    boolean estValide;

    @ManyToMany(cascade = CascadeType.ALL)
    Set<Etudiant> etudiants;
}
