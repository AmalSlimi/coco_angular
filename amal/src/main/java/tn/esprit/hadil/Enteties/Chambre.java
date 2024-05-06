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
public class Chambre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long chambreId;

    long numeroChambre;
    @Enumerated(EnumType.ORDINAL)
    TypeChambre typeChambre;
    public enum TypeChambre{
        Simple , Double , Triple
    }

    @ManyToOne
    Bloc bloc;

    @OneToMany(cascade = CascadeType.ALL)
    Set<Reservation> reservations;
}
