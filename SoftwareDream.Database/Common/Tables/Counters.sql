CREATE TABLE [Common].[Counters] (
    [Id]        INT          IDENTITY (1, 1) NOT NULL,
    [UserId]    INT          NULL,
    [UserIp]    VARCHAR (15) NULL,
    [DateTime]  DATETIME     NULL,
    [ProjectId] INT          NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([ProjectId]) REFERENCES [Project].[Main] ([Id]),
    FOREIGN KEY ([UserId]) REFERENCES [Common].[Users] ([Id])
);

