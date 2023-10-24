import { FoodModel } from './../models/food.model';
import { Router } from "express";
import { Sample_Food, Sample_tags } from "../data";
import asynceHandler from 'express-async-handler'
const router = Router();



router.get("/", asynceHandler(
    async(req, res) => {
        const foods = await FoodModel.find();
      res.send(foods);
    }
));

router.get("/seed", asynceHandler(
    async (req, res) => {
         const foodsCount = await FoodModel.countDocuments();
         if (foodsCount>0){
             res.send("Seed is already done");
             return;
         }
         await FoodModel.create(Sample_Food);
         res.send("Seed is Created");
       }
 ));


router.get("/search/:foodname",asynceHandler(
  async (req, res) => {
    const searchRegex = new RegExp(req.params.foodname,'i');
   const foods = await FoodModel.find({name: {$regex: searchRegex}})
    res.send(foods);
  }
));


router.get("/tags", asynceHandler(
  async(req, res) => {
    const tags = await FoodModel.aggregate([
      {
        $unwind: 'tags',
      },
      {
        $group:{
          _id: 'tags',
          count : {$sum: 1 }
        }
      },
      {
        $project:{
          _id : 0,
          name: '$_id',
          count : '$count',
        }
      }
    ]).sort({count : -1});
    const all = {
      name : 'All',
      count : await FoodModel.countDocuments()
    }
    tags.unshift(all);
    res.send(tags);
  }
));


router.get("/tag/:tagName", (req, res) => {
  const tagName = req.params.tagName;
  const foods = Sample_Food.filter((food) => food.tags?.includes(tagName));
  res.send(foods);
});

router.get("/:foodId", asynceHandler(
  async(req, res) => {
    const food = await FoodModel.findById(req.params.foodId);
    res.send(food);
  }
));

export default router;
