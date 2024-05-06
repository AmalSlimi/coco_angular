package tn.esprit.amal.Enteties;
import jakarta.persistence.*;
import lombok.experimental.FieldDefaults;
import lombok.*;
import java.util.Date;
import java.util.Set;

@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Etudiant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long etudiantId;

    String nomEt;
    String prenomEt;
    long cin;
    String ecole;
    Date dateNaissance;

    @ManyToMany(cascade = CascadeType.ALL , mappedBy = "etudiants")
    Set<Reservation> reservations;
}
