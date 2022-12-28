var rawData = [
    {
        "id": 1,
        "userId": 1,
        "name": "Rohit Sharma",
        "influencerKdmId": 2,
        "engagementLevelId": 3,
        "innovaDmid": 1,
        "reportsToId": null,
        "linkedInUrl": "https://www.linkedin.com/company/company/",
        "persona": "Good Person",
        "roleDescription": "Makes Policy",
        "customerId": 1,
        "gender": "Male",
        "designation": "CEO",
        "influencerOrKdm_Name": "KDM",
        "innovaDM_Name": "Nikkila",
        "reportsTO_Name": "",
        "parentId": null,
        "engagementLevel_Name": "Actively Engaged"
    },
    {
        "id": 2,
        "userId": 2,
        "name": "Aman Singh",
        "influencerKdmId": 1,
        "engagementLevelId": 3,
        "innovaDmid": 1,
        "reportsToId": null,
        "linkedInUrl": "https://www.linkedin.com/company/",
        "persona": "Good Person",
        "roleDescription": "Manages Various Project",
        "customerId": 1,
        "gender": "Male",
        "designation": "Senior Manager",
        "influencerOrKdm_Name": "Influencer",
        "innovaDM_Name": "Nikkila",
        "reportsTO_Name": "Rohit Sharma",
        "parentId": 1,
        "engagementLevel_Name": "Actively Engaged"
    },
    {
        "id": 3,
        "userId": 3,
        "name": "Suresh Singh",
        "influencerKdmId": 1,
        "engagementLevelId": 3,
        "innovaDmid": 1,
        "reportsToId": null,
        "linkedInUrl": "https://www.linkedin.com/company/",
        "persona": "Good Person",
        "roleDescription": "Manages Various Project",
        "customerId": 1,
        "gender": "Male",
        "designation": "Senior Manager",
        "influencerOrKdm_Name": "Influencer",
        "innovaDM_Name": "Nikkila",
        "reportsTO_Name": "Rohit Sharma",
        "parentId": 1,
        "engagementLevel_Name": "Actively Engaged"
    },
    {
        "id": 4,
        "userId": 4,
        "name": "Kamal Singh",
        "influencerKdmId": 1,
        "engagementLevelId": 3,
        "innovaDmid": 1,
        "reportsToId": null,
        "linkedInUrl": "https://www.linkedin.com/company/",
        "persona": "Good Person",
        "roleDescription": "Manages Project",
        "customerId": 1,
        "gender": "Male",
        "designation": "Manager",
        "influencerOrKdm_Name": "Influencer",
        "innovaDM_Name": "Nikkila",
        "reportsTO_Name": "Aman Singh",
        "parentId": 2,
        "engagementLevel_Name": "Actively Engaged"
    },
    {
        "id": 5,
        "userId": 5,
        "name": "Hemant Srivastava",
        "influencerKdmId": 1,
        "engagementLevelId": 2,
        "innovaDmid": 1,
        "reportsToId": null,
        "linkedInUrl": "https://www.linkedin.com/company/",
        "persona": "Good Person",
        "roleDescription": "Manages Project",
        "customerId": 1,
        "gender": "Male",
        "designation": "Manager",
        "influencerOrKdm_Name": "Influencer",
        "innovaDM_Name": "Nikkila",
        "reportsTO_Name": "Aman Singh",
        "parentId": 2,
        "engagementLevel_Name": "Partially Engaged"
    },
    {
        "id": 6,
        "userId": 6,
        "name": "Ishika Verma ",
        "influencerKdmId": 1,
        "engagementLevelId": 2,
        "innovaDmid": 1,
        "reportsToId": null,
        "linkedInUrl": "https://www.linkedin.com/company/",
        "persona": "Good Person",
        "roleDescription": "Manages Project",
        "customerId": 1,
        "gender": "Female",
        "designation": "Manager",
        "influencerOrKdm_Name": "Influencer",
        "innovaDM_Name": "Nikkila",
        "reportsTO_Name": "Suresh Singh",
        "parentId": 3,
        "engagementLevel_Name": "Partially Engaged"
    },
    {
        "id": 7,
        "userId": 7,
        "name": "Mansi Srivastava",
        "influencerKdmId": 1,
        "engagementLevelId": 2,
        "innovaDmid": 1,
        "reportsToId": null,
        "linkedInUrl": "https://www.linkedin.com/company/",
        "persona": "Good Person",
        "roleDescription": "Manages Project",
        "customerId": 1,
        "gender": "Female",
        "designation": "Manager",
        "influencerOrKdm_Name": "Influencer",
        "innovaDM_Name": "Nikkila",
        "reportsTO_Name": "Suresh Singh",
        "parentId": 3,
        "engagementLevel_Name": "Partially Engaged"
    }
]


let parent = rawData.filter(emp => !emp.parentId)[0];

getChildren(parent);

function getChildren(parent){
    parent.children = rawData.filter(emp => emp.parentId == parent.userId);
    parent.children.forEach(child => {
        getChildren(child);
    })
}

console.log(parent);