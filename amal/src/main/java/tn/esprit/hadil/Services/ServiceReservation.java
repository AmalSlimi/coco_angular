package tn.esprit.amal.Services;

import tn.esprit.amal.Enteties.Bloc;
import tn.esprit.amal.Enteties.Reservation;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface ServiceReservation {
    Reservation addOrUpdateReservation (Reservation reservation);
    void deleteReservation (String id);
    Optional<Reservation> getReservationById(String id);
    Set<Reservation> getAllReservations();
    Bloc getBlocByReservationId(String reservationId);
   // public List<Reservation> getReservationsByIdChambre(int idChambre);
   // public Universite getUniversiteByIdBloc(int idBloc);
}
