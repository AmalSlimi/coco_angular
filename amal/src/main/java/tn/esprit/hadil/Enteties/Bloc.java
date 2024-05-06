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
public class Bloc {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long blocId;

    String nomBloc;
    long capaciteBloc;

    @ManyToOne
    Foyer foyer;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "bloc")
    Set<Chambre> chambres;
}
