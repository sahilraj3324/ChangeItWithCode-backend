const express = require("express")
const mongoose = require('mongoose')

const Content = require("../models/content")
const router = express.Router()

router.post('/content' , async(req , res)=>{
    const{day , title , question1 , question2 , question3 , question4 , question5 , answer1 , answer2 , answer3, answer4, answer5} = req.body
try{
    const content = new Content({
        day , 
        title , 
        question1 , 
        question2 , 
        question3 , 
        question4 , 
        question5 , 
        answer1 , 
        answer2 , 
        answer3,
         answer4, 
         answer5
    })
    await content.save()
    res.status(201).json(content)
}
    catch(error){
        res.status(400).json({ message: 'Error creating content', error: error.message });

    }
})

router.get('/content', async (req, res) => {
  const { id } = req.query;

  try {
      if (id) {
          if (!mongoose.Types.ObjectId.isValid(id)) {
              return res.status(400).json({ message: 'Invalid content ID format' });
          }

          const content = await Content.findById(id);
          if (!content) {
              return res.status(404).json({ message: 'Content not found' });
          }

          return res.status(200).json(content);
      }

      const contents = await Content.find();
      if (contents.length === 0) {
          return res.status(404).json({ message: 'No content available' });
      }

      res.status(200).json(contents);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching content', error: error.message });
  }
});


  router.delete('/content/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedContent = await Content.findByIdAndDelete(id);
      if (!deletedContent) {
        return res.status(404).json({ message: 'Content not found' });
      }
  
      res.status(200).json({ message: 'Content deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting content', error: error.message });
    }
  });

module.exports = router
