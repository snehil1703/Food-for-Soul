var express = require('express');
var app = express();
var path = require('path');

exports.BooksPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/BooksPage.html'));
};

exports.GoodReadsPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReadsPage.html'));
};
exports.Children = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/Children.html'));
};
exports.Comics = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/Comics.html'));
};
exports.Comics_Marvel = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/Comics_Marvel.html'));
};
exports.Comics_DC = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/Comics_DC.html'));
};
exports.Comics_DarkHorse = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/Comics_DarkHorse.html'));
};
exports.Comics_Image = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/Comics_Image.html'));
};
exports.Comics_Others = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/Comics_Others.html'));
};
exports.Humor = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/Humor.html'));
};
exports.Mystery = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/Mystery.html'));
};
exports.Mystery_Mystery = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/Mystery_Mystery.html'));
};
exports.Mystery_Thriller = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/Mystery_Thriller.html'));
};
exports.Mystery_Writing = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/Mystery_Writing.html'));
};
exports.Mystery_Others = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/Mystery_Others.html'));
};
exports.Romance = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/Romance.html'));
};
exports.ScienceFiction = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/ScienceFiction.html'));
};
exports.ScienceFiction_Fantasy = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/ScienceFiction_Fantasy.html'));
};
exports.ScienceFiction_Gaming = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/ScienceFiction_Gaming.html'));
};
exports.ScienceFiction_Science = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/ScienceFiction_Science.html'));
};
exports.ScienceFiction_Writing = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/ScienceFiction_Writing.html'));
};
exports.ScienceFiction_Others = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/ScienceFiction_Others.html'));
};
exports.Teen = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/GoodReads/Teen.html'));
};

exports.KnowledgePage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/KnowledgePage.html'));
};
exports.Business = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Business.html'));
};
exports.Computers = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Computers.html'));
};
exports.Computers_Databases = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Computers_Databases.html'));
};
exports.Computers_Graphics = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Computers_Graphics.html'));
};
exports.Computers_Hardware = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Computers_Hardware.html'));
};
exports.Computers_Internet = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Computers_Internet.html'));
};
exports.Computers_Mobile = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Computers_Mobile.html'));
};
exports.Computers_Networking = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Computers_Networking.html'));
};
exports.Computers_OperatingSystems = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Computers_OperatingSystems.html'));
};
exports.Computers_Programming = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Computers_Programming.html'));
};
exports.Computers_Security = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Computers_Security.html'));
};
exports.Computers_Software = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Computers_Software.html'));
};
exports.Computers_Web = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Computers_Web.html'));
};
exports.Computers_Others = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Computers_Others.html'));
};
exports.Education = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Education.html'));
};
exports.History = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/History.html'));
};
exports.Law = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Law.html'));
};
exports.Literature = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Literature.html'));
};
exports.Medical = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Medical.html'));
};
exports.Medical_Administration = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Medical_Administration.html'));
};
exports.Medical_Dentistry = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Medical_Dentistry.html'));
};
exports.Medical_History = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Medical_History.html'));
};
exports.Medical_Medicine = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Medical_Medicine.html'));
};
exports.Medical_Nursing = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Medical_Nursing.html'));
};
exports.Medical_Psychology = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Medical_Psychology.html'));
};
exports.Medical_Research = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Medical_Research.html'));
};
exports.Medical_Veterinary = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Medical_Veterinary.html'));
};
exports.Medical_Others = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Medical_Others.html'));
};
exports.Politics = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Politics.html'));
};
exports.Reference = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Reference.html'));
};
exports.Sciences = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Sciences.html'));
};
exports.Sports = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Knowledge/Sports.html'));
};

exports.LifestylePage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/LifestylePage.html'));
};
exports.Arts = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Arts.html'));
};
exports.Arts_Architecture = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Arts_Architecture.html'));
};
exports.Arts_Collections = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Arts_Collections.html'));
};
exports.Arts_DecorativeArts = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Arts_DecorativeArts.html'));
};
exports.Arts_GraphicDesign = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Arts_GraphicDesign.html'));
};
exports.Arts_Painting = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Arts_Painting.html'));
};
exports.Arts_PerformingArts = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Arts_PerformingArts.html'));
};
exports.Arts_Study = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Arts_Study.html'));
};
exports.Arts_Vehicle = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Arts_Vehicle.html'));
};
exports.Arts_Others = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Arts_Others.html'));
};
exports.Biographies = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Biographies.html'));
};
exports.Biographies_Arts = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Biographies_Arts.html'));
};
exports.Biographies_Ethnic = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Biographies_Ethnic.html'));
};
exports.Biographies_Leaders = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Biographies_Leaders.html'));
};
exports.Biographies_Memoirs = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Biographies_Memoirs.html'));
};
exports.Biographies_Professionals = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Biographies_Professionals.html'));
};
exports.Biographies_Sports = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Biographies_Sports.html'));
};
exports.Biographies_Travelers = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Biographies_Travelers.html'));
};
exports.Biographies_TrueCrime = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Biographies_TrueCrime.html'));
};
exports.Biographies_Others = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Biographies_Others.html'));
};
exports.Food = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Food.html'));
};
exports.Health = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Health.html'));
};
exports.LGBT = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/LGBT.html'));
};
exports.Parenthood = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Parenthood.html'));
};
exports.Philosophy = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Philosophy.html'));
};
exports.Religion = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Religion.html'));
};
exports.Travel = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Books/Lifestyle/Travel.html'));
};






exports.N_NotesPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/NotesPage.html'));
};

exports.N_ArtsPage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/ArtsPage.html'));
};
exports.N_Arts = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Arts/Arts.html'));
};
exports.N_Humanities = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Arts/Humanities.html'));
};
exports.N_Law = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Arts/Law.html'));
};
exports.N_Property = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Arts/Property.html'));
};
exports.N_SocialSciences = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Arts/SocialSciences.html'));
};
exports.N_SocialWork = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Arts/SocialWork.html'));
};

exports.N_CommercePage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/CommercePage.html'));
};
exports.N_Business = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Commerce/Business.html'));
};
exports.N_Commerce = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Commerce/Commerce.html'));
};
exports.N_Education = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Commerce/Education.html'));
};
exports.N_Professional = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Commerce/Professional.html'));
};
exports.N_Teaching = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Commerce/Teaching.html'));
};

exports.N_MedicinePage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/MedicinePage.html'));
};
exports.N_Dentistry = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Medicine/Dentistry.html'));
};
exports.N_Health = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Medicine/Health.html'));
};
exports.N_Medicine = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Medicine/Medicine.html'));
};
exports.N_Nursing = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Medicine/Nursing.html'));
};
exports.N_Pharmacy = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Medicine/Pharmacy.html'));
};
exports.N_Veterinary = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Medicine/Veterinary.html'));
};

exports.N_SciencePage = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/SciencePage.html'));
};
exports.N_Agriculture = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Science/Agriculture.html'));
};
exports.N_Architecture = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Science/Architecture.html'));
};
exports.N_Communications = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Science/Communications.html'));
};
exports.N_Engineering = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Science/Engineering.html'));
};
exports.N_Information = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Science/Information.html'));
};
exports.N_Mathematics = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Science/Mathematics.html'));
};
exports.N_Science = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Science/Science.html'));
};
exports.N_Sports = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/Home_Notes/Science/Sports.html'));
};
