package it.akademija.spring.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import it.akademija.spring.dto.FestivalDTO;
import it.akademija.spring.services.FestivalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(value = "Festival controller")
@RequestMapping(value = "/festivals")

public class FestivalController {

    @Autowired
    private FestivalService festivalService;

    public FestivalController() {    }

    public FestivalController(FestivalService festivalService) {
        this.festivalService = festivalService;
    }
    @GetMapping
    @ApiOperation(value = "Get all festivals", notes = "Returns list of Festivals")
        public List<FestivalDTO> getAllFestivals(){
        return festivalService.getAllFestivals();
    }
    @GetMapping(path = "/{oldTitle}")
    @ApiOperation(value = "Get one festival", notes="Returns desired festival")
        public FestivalDTO getFestivalByTitle(
                @ApiParam(value = "Festival title", required = true)
                @PathVariable String title){
        return festivalService.findFestivalByTitle(title);
    }

    @PostMapping
    @ApiOperation(value = "Create and add new festival",
            notes = "Creates new Festival")
        public void createFestival(
                @ApiParam(value = "Festival data", required = true)
                @RequestBody final CreatingFestival creatingFestival) {
        festivalService.createFestival(
                creatingFestival.getTitle(),
                creatingFestival.getImage(),
                creatingFestival.getDescription(),
                creatingFestival.getType(),
                creatingFestival.isFlag());
    }

     @PutMapping(path = "/{oldTitle}")
     @ApiOperation(value = "Update Festival", notes = "Edit selected Festival")
        public void updateFestival(
                @ApiParam(value = "Festival title",required = true)
                @PathVariable final String oldTitle,
                @RequestBody final UpdatingFestival updatingFestival){
        festivalService.updateFestival(
                oldTitle,
                updatingFestival.getTitle(),
                updatingFestival.getImage(),
                updatingFestival.getDescription(),
                updatingFestival.getType(),
                updatingFestival.isFlag());
        }

     @DeleteMapping(path = "/{title}")
     @ApiOperation(value = "Delete Festival", notes = "Deletes selected festival")
        public void deleteFestival(@PathVariable final String title){
        festivalService.deleteFestival(title);
     }

}
