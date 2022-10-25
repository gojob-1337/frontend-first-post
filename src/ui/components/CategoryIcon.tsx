import React from "react";
import { TransactionGategoryEnum } from "../../domain/transactions/transaction";

type CategoryIconProps = {
  category: TransactionGategoryEnum;
};

const CategoryIcon = ({ category }: CategoryIconProps) => {
  switch (category) {
    case TransactionGategoryEnum.UNKNOWN:
      return (
        <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center">
          <img
            className="w-10 h-10 rounded-full bg-slate-300 "
            src="https://www.pngfind.com/pngs/m/2-24050_question-mark-png-image-transparent-white-question-mark.png"
          />
        </div>
      );
    case TransactionGategoryEnum.FOOD:
      return (
        <div className="w-12 h-12 rounded-full bg-emerald-300 flex items-center justify-center">
          <img
            className="w-10 h-10 rounded-full bg-emerald-500"
            src="https://flyclipart.com/thumb2/fast-food-fast-food-food-icon-with-png-and-vector-format-751916.png"
          />
        </div>
      );
    case TransactionGategoryEnum.FUN:
      return (
        <div className="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center">
          <img
            className="w-10 h-10 rounded-full bg-blue-500"
            src="https://www.pngkey.com/png/full/208-2086315_open-icon-game-png.png"
          />
        </div>
      );
  }
};

export default CategoryIcon;
