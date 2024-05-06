package tn.esprit.amal.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.amal.Enteties.Bloc;
import tn.esprit.amal.Enteties.Reservation;

import java.util.List;

    @Repository
public interface RepositoryReservation extends JpaRepository<Reservation, String > {
    public Bloc getBlocByReservationId(String reservationId);
    // List<Reservation> findByChambreId(int idChambre);


}
