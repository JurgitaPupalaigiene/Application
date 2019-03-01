package it.akademija.spring.repositories;

import it.akademija.spring.entities.Festival;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FestivalRepository extends JpaRepository <Festival, Long> {
    Festival findFestivalByTitle(String title);

    void deleteFestivalByTitle(String title);
}
