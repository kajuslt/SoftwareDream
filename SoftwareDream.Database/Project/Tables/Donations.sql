CREATE TABLE [Project].[Donations] (
    [Id]               INT             IDENTITY (1, 1) NOT NULL,
    [UserId]           INT             NULL,
    [ProjectId]        INT             NULL,
    [Date]             DATE            NULL,
    [AmountOfDonation] NUMERIC (17, 2) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([ProjectId]) REFERENCES [Project].[Main] ([Id]),
    FOREIGN KEY ([UserId]) REFERENCES [Common].[Users] ([Id])
);

