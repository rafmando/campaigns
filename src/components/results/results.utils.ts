interface Campaign {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  Budget: number;
}

export const addCampaign = (campaign: Campaign, results: any) => {
  const isFound = results.some(function (el: any) {
    return el.id === campaign.id;
  });

  if (isFound) {
    return true;
  } else {
    return false;
  }
};

export const getStatus = (campaign: Campaign) => {
  const { startDate, endDate } = campaign;

  const start = Date.parse(startDate);
  const end = Date.parse(endDate);
  const current = Date.now();

  if (
    current.valueOf() >= start.valueOf() &&
    current.valueOf() <= end.valueOf()
  ) {
    return "Active";
  } else {
    return "Indicative";
  }
};
