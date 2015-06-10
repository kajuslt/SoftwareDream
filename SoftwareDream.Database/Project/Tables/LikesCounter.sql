CREATE TABLE [Project].[LikesCounter] (
    [Id]            INT IDENTITY (1, 1) NOT NULL,
    [ProjectId]     INT NULL,
    [LikesGathered] INT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([ProjectId]) REFERENCES [Project].[Main] ([Id])
);

