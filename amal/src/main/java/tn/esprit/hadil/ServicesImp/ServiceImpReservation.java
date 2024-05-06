package tn.esprit.amal.ServicesImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.amal.Enteties.Bloc;
import tn.esprit.amal.Enteties.Reservation;
import tn.esprit.amal.Repositories.RepositoryReservation;
import tn.esprit.amal.Services.ServiceReservation;

import java.util.List;
import java.util.Optional;
import java.util.Set;
@Service

public class ServiceImpReservation implements ServiceReservation {
    @Autowired
    RepositoryReservation repositoryReservation;
    @Override
    public Reservation addOrUpdateReservation(Reservation reservation) {
        return repositoryReservation.save(reservation);
    }

    @Override
    public void deleteReservation(String id) {
        repositoryReservation.deleteById(id);
    }

    @Override
    public Optional<Reservation> getReservationById(String id) {
        Optional<Reservation> reservation = repositoryReservation.findById(id);
        if(reservation.isPresent())
            return reservation;
        else
            return Optional.of(new Reservation());

    }

    @Override
    public Set<Reservation> getAllReservations() {
        return (Set<Reservation>)repositoryReservation.findAll();
    }

    @Override
    public Bloc getBlocByReservationId(String reservationId) {
        return repositoryReservation.getBlocByReservationId(reservationId);
    }

   /* @Override
    public List<Reservation> getReservationsByIdChambre(int idChambre) {
        return repositoryReservation.findByChambreId(idChambre);
    }*/


}
