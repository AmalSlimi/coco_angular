package tn.esprit.amal.Enteties;
import jakarta.persistence.*;
import lombok.experimental.FieldDefaults;
import lombok.*;
import java.util.Set;

@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Foyer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long foyerId;

    String nomFoyer;
    long capaciteFoyer;

    @OneToOne
    Universite universite;

    @OneToMany(cascade = CascadeType.ALL , mappedBy = "foyer")
    Set<Bloc> blocs;
}
