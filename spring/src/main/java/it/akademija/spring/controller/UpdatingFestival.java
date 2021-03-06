package it.akademija.spring.controller;

public class UpdatingFestival {
    private String oldTitle;
    private String title;
    private String image;
    private String description;
    private String type;
    private boolean flag;

    public UpdatingFestival() {
    }

    public UpdatingFestival(String oldTitle, String title, String image, String description, String type, boolean flag) {
        this.oldTitle = oldTitle;
        this.title = title;
        this.image = image;
        this.description = description;
        this.type = type;
        this.flag = flag;
    }

    public String getOldTitle() {
        return oldTitle;
    }

    public void setOldTitle(String oldTitle) {
        this.oldTitle = oldTitle;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isFlag() {
        return flag;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }
}
